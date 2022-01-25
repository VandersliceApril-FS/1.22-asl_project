class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, 
            isLoaded: false,
            item // just the one quiz item
        }
    }

    componentDidMount() {
        fetch(
            `/${this.props.model}`,
            { headers: { Accept: 'application/json'} })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
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
        if(error) {
            return React.createElement('div', null `Error: ${error.message}`)
        } else if(!isLoaded) {
            return React.createElement('div', null, 'Loading...')
        } else {
            return React.createElement('h1', null, `${item}`,
                // React.createElement('p', null, `${item.id}`),
                // React.createElement('p', null, `${item.weight}%`),
                // React.createElement('h1', null, `${item.updateAt}`),
                // React.createElement('h1', null, `${item.createdAt}`)
            )
        }
    }

}