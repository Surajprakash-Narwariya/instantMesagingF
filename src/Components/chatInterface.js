import '../mycss.css';
function ChatInterface(props) {
    const userName = props.data;
    console.log(userName);
    return (
        <div className='card' id={userName}>
            <div className='card-body' id={userName}>
                <span id={userName}>
                    <img
                        className='circularImage'
                        src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
                        alt=''
                        id={userName}
                    />
                </span>
                <span className='h5' id={userName}>
                    {userName}
                </span>
            </div>
        </div>
    );
}
export default ChatInterface;
