import React from 'react';
import "./Chat.css"
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useParams} from "react-router-dom";
import {useState,useEffect,useRef} from "react";
import db from './firebase';
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat(){

    var element = document.getElementsByClassName("chat__messages");
    element.scrollTop = element.scrollHeight;

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails]= useState(null);
    const [roomMessages, setRoomMessages]= useState([]);
    const el = useRef(null);

    useEffect(() => {
        el.current.scrollIntoView({ block: 'end'});
    });

    useEffect(() => {

        if(roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ))}


            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
              setRoomMessages(
                  snapshot.docs.map((doc) => doc.data()))
            );


        }, [roomId]);

        console.log("messages >>>>" , roomMessages);

        
    

    return(
        <div className="chat">
        
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
    <strong># {roomDetails?.name}</strong>                        
                        <StarBorderSharpIcon />
                    </h4>
                    

                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                    
                </div>
            </div>

           
            
           
                <div className="chat__messages">
                    {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                    ))}
                    <div id={'el'} ref={el} />
                
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />

        </div>
    )

    
}

export default Chat;