import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";
import BookIcon from '@mui/icons-material/Book';


export const navigationCommunication = [
    {
        title: "Home",
        icon:<HomeIcon/>,
        path:"/communication"
    },

    // {
    //     title: "Explore",
    //     icon:<ExploreIcon/>,
    //     path:"/communication/explore"
    // },

    // {
    //     title: "Notification",
    //     icon:<NotificationIcon/>,
    //     path:"/communication/notification"
    // },

    // {
    //     title: "Messages",
    //     icon:<MessageIcon/>,
    //     path:"/communication/messages"
    // },

    // {
    //     title: "Lists",
    //     icon:<ListAltIcon/>,
    //     path:"/communication/list"
    // },

    // {
    //     title: "Communities",
    //     icon:<GroupIcon/>,
    //     path:"/communication/communities"
    // },

    {
        title: "Verified",
        icon:<VerifiedIcon/>,
        path:"/communication/verified"
    },

    {
        title: "Profile",
        icon:<AccountCircleIcon/>,
        path:"/communication/profile/:userId"
    },

    // {
    //     title: "More",
    //     icon:<PendingIcon/>,
    //     path:"/communication/more"
    // },
    {
        title: "Go Back to the E-VBook store",
        icon:<BookIcon/>,
        path:"/"
    },
]