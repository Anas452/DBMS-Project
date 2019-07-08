import React from "react"
import "../css/UploadImage.css"
import axios from "axios"
import sweetalert from "sweetalert"


class Upload extends React.Component {

    state = {
        dataURL : "",
        fileName : ""
    }

    upload = () => {   
    
        if(this.state.fileName === ""){
            // console.log("no file selected")
            sweetalert("Not Submit","No file Selected","warning")
        }else{
            console.log("fileName",this.state.fileName,"dataURL",this.state.dataURL)
            // const slicedFileName = 
            axios.post("/upload",{
                dataURL : this.state.dataURL,
                fileName : this.state.fileName
            })
            .then(res =>  console.log("/upload response",res.data))
        }
    }
    file =  (event) => {
        // console.log(this)
        const input = event.target;
            console.log("event",event.target.value)
            const reader = new FileReader();
            reader.onload = () => {

                console.log("onload ")

                const dataURL = reader.result;
                const fileName = input.files[0].name


                this.setState({dataURL : dataURL,fileName})
  
            // console.log("dataURL",dataURL)
            // console.log("input",input.files[0].name)
        }
        reader.onloadstart = () => {
            console.log("load start")
        }
        reader.onloadend = () => {
            console.log("load end")

        }
    
        reader.readAsDataURL(input.files[0]);
        // this.setState({fileName : event.target.value})
        // console.log(event.target.value)
    }

    render(){
        // console.log("URL",this.state.dataURL)
        return(
            <div className="upload-image">
                <h1>Upload Image TO MongoDB</h1>
                <input name="fileName" onChange={  this.file} type="file"  /> <br/>
                <input onClick={ this.upload} type="button" value="Submit"/>
            </div>
        )
    }
}

export default Upload