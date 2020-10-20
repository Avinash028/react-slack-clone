import React from 'react';
import "./Sidebar.css";
import {useState,useEffect} from "react";
import SidebarOptions from './SidebarOptions'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FilterIcon from '@material-ui/icons/Filter';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{user}]= useStateValue();

    const [channels, setChannels] = useState([]);

    useEffect( () => {
        db.collection("rooms").onSnapshot((snapshot) =>  setChannels(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                name:doc.data().name
            }))
        )
        );
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> Avinash Slack</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title={"Threads"}/>
            <SidebarOptions Icon={InboxIcon} title={"Mentions & reactions"}/>
            <SidebarOptions Icon={DraftsIcon} title={"Saved Items"}/>
            <SidebarOptions Icon={BookmarkBorderIcon} title={"Channel browser"}/>
            <SidebarOptions Icon={PeopleAltIcon} title={"People & user groups"}/>
            <SidebarOptions Icon={AppsIcon} title={"Apps"}/>
            <SidebarOptions Icon={FilterIcon} title={"File browser"}/>
            <SidebarOptions Icon={ExpandLessIcon} title={"Show less"}/>
            
            <SidebarOptions Icon={ExpandMoreIcon} title={"Channels"}/>
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption title={"Add Channels"}/>
            <hr />
           
            {
                channels.map(channel => (
                    <SidebarOptions id={channel.id} title={channel.name}/>
                ))
            }
        </div>
    );
}


export default Sidebar;