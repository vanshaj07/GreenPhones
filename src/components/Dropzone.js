import React, {Component, createRef} from 'react';
import Dropzone from 'react-dropzone';
//const dropzoneRef = createRef();
const KILO_BYTES_PER_BYTE = 1000;
const DragDropText = {
  "font-weight": "bold",
  "letter-spacing": "2.2px",
  "margin-top": 0,
  "text-align": "center",
};
export default class DropzoneComponent extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      if(files[0].name.includes(".PNG")){ 
        this.setState({files})
      this.setState({message:""})
      this.props.onFileSelect(files)
      } else if(files[0].name.includes(".JPG")){
        this.setState({files})
        this.setState({message:""})
        this.props.onFileSelect(files)
      } else if(files[0].name.includes(".JPEG")){
        this.setState({files})
        this.setState({message:""})
        this.props.onFileSelect(files)
      }else{
        this.setState({message:this.props.msg, files:[] })
        this.props.onFileSelect(null)
      }
    };
    this.state = {
      files: [],
      message:""
    };
  }
  
  //  openDialog = () => {
  //   // Note that the ref is set async,
  //   // so it might be null at some point 
  //   if (dropzoneRef.current) {
  //     dropzoneRef.current.open()
  //   }
  // };

  deleteAttachement =(file) =>{
    let { files } = this.state;
    var newArray = files.filter(e => e !== file);
    this.setState({ files: newArray })
    /**
     * set onFileRemove accordingly in parent as per requirement
     */
    this.props.onFileRemove(newArray);
  }

  reset = () =>{
    this.setState({ files: [] })
  }

//   componentDidUpdate(prevProps) {
//     const {  reset } = this.props;
//   if (prevProps.reset !== reset) {
//     if (reset === true) {
//       this.reset();
//       this.props.clearForm();
//     }
//   }
// }

  convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

  render() {
    const {message} = this.state
    const { multiple, acceptFileType } = this.props;
    const files = this.state.files.map((file, key) => (
      <div className="chip" key={key}>
      <span
                        className={"file-attachment"}
                       //data-auto="fileAttachment"
                        // onClick={(e) => {
                        //   this.downloadAttachement(
                        //     file.recordId,
                        //     file.fileName
                        //   );
                        // }}
                      >
                        {/* {item.fileName} */}
                        {file.name} - {this.convertBytesToKB(file.size)} kb
                      </span>
                       <span
                       className="closebtn"
                    //   data-auto="closeAttachment"
                       onClick={(e) => {
                         this.deleteAttachement(file);
                       }}
                     >
                       <i className="simple-icon-close custom-close" />
                     </span>
                     </div>
    ));

    return (
      <Dropzone 
      onDrop={this.onDrop} 
      multiple = {false} 
      accept = {acceptFileType}
     // ref={dropzoneRef} noClick noKeyboard 
      >
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({
              className: 'dropzone'
              })} style={{"text-align": "center"}}>
              <input {...getInputProps()} />
              <p style = {DragDropText} >{`Drag 'n' drop your phone ${multiple? "images" : "image"} here or click to select ${multiple? "images" : "an image"}`}</p>
          {/* <Button
                          outline
                          color="primary"
                          className="mt-1"
                          size="sm"
                          onClick={this.openDialog}
                          // disabled={
                          //   this.props.disableForm || this.state.disableUpload
                          // }
                        >
                         Click here to choose a file
                        </Button> */}
            </div>
            <aside>
              {/* <h6 className="mt-2" >{files.length > 0 ? `${files.length>1 ? "images":"image"} to be uploaded` : ""}</h6> */}
              <ul className = "mt-2" style={{color: "red"}}>{message}</ul>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

<DropzoneComponent />