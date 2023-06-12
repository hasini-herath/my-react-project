import './ContactForm.css';

function ContactForm(){
    return(
        <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder='Name'/>
                <input placeholder='E-mail'/>
                <input placeholder='Subject'/>
                <textarea placeholder='Message' rows='4'/>
                <button>Send Message</button>

            </form>
        </div>
    )
}
export default ContactForm;