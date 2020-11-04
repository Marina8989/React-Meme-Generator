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