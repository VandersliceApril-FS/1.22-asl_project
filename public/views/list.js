class List extends React.Component { // reused across three different apis. will be different for each
    constructor(props) {
        super(props);
        this.state = {
            error: null, // first state
            isLoaded: false, // second state
            items: [] // display state
        }
    }
    // happens the moment component is created and mounted to dom
    componentDidMount() {
        fetch(
            `/${this.props.model}`,
            { headers: { Accept: 'application/json' } })
            .then(res => res.json()) // after the fetch, set response, parse
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state
        if (error) {
            return React.createElement('div', null, `Error: ${error.message}`)            
        } else if (!isLoaded) {
            return React.createElement('div', null, 'Loading...')
        } else {
            return React.createElement(
                'ul', null,
                items.map( item => React.createElement('li', { key: item.id }, 
                    `${item.name} - `,
                    React.createElement('a', { href: `/${this.props.model}/${item.id}/edit`}, 'Edit'),
                    React.createElement('span', null, ' | '),
                    React.createElement('a', { href: `/${this.props.model}/${item.id}/delete`}, 'Delete'),
                ))
            )
        }
    }
}