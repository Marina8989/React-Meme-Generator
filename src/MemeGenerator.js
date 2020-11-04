import React from 'react'

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitChange = this.submitChange.bind(this)
    }
    
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
           this.setState({allMemeImg: memes}) 
        })
    }


    handleChange(event) {
       const {name, value} = event.target
       this.setState({ [name] : value})
    }
    submitChange(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randomImgs = this.state.allMemeImg[randomNum].url 
        this.setState({
             randomImg: randomImgs
        })
    }

    render() {
        return (
            <div>
              <form onSubmit={this.submitChange}>
                  <input 
                    type="text"
                    name="topText" 
                    placeholder="Top Text" 
                    value={this.state.topText} 
                    onChange={this.handleChange}
                   />
                  
                  <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                   />
                  
                  <button>Generate</button>
              </form>
                <div>
                    <img src={this.state.randomImg} />
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator