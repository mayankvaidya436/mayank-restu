import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverLay=(props)=>{
    return <div className={classes.modal}> 
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById('overlays')
const Modal=(props)=>{
    return <div>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
    </div>
}
export default Modal