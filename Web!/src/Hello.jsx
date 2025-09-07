function Hello(){
    let myname = 'Avi';
    let fullname = () => {
        return "Ranjan";
    }
    let number = 456;

    return <h3>{number} . Hello,this is the future.I am {myname} {fullname()}.</h3>
}
export default Hello;