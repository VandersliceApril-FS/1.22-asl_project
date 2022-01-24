// create three states. We are using React without JSX
// three different states: loading, if api returned error, displaying models from api
class List extends React.Component { // resused across three different apis. will be different for each
    constructor(props) {
        super(props);
        this.state = {
            error: null, // first state
            isLoaded: false, // second state
            items: [] // display state
        }
    }
    // happens the moment component is create dna mounted to dom
    componentDidMount() {
        fetch(
            `/${this.props.model}`, // creating a prop called model, passed into component, tells it which one to hit
            { headers: { Accept: 'application/json' } }) //tells difference between html and json request
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

// replace html element with component
// const domContainer = document.querySelector('ul#list')
// ReactDOM.render(React.createElement('List'), domContainer)