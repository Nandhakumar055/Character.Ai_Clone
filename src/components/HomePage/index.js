import { Component } from "react";
import { LuSearch } from "react-icons/lu";
import { PiRepeatBold } from "react-icons/pi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import SideBar from '../SideBar'
import TryTheseListItems from '../TryTheseListItems'
import FeaturedListItems from '../FeaturedListItems'
import CategoriesListItems from '../CategoriesListItems'
import TrySayingListItems from '../TrySayingListItems'

import './index.css'


const tryTheseListItems  = [
    {
        id: 0,
        profileImage1 : "https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0",
        heading1: "Practice a new language",
        description1: "with HyperGlot",
        profileImage2 : "https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0",
        heading2: "Plan a trip",
        description2: "with Trip Planner",
    },
    {
        id: 1,
        profileImage1 : "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0",
        heading1: "Practice interviewing",
        description1: "with Interviewer",
        profileImage2 : "https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
        heading2: "Write a story",
        description2: "with Creative Helper",
    },
    {
        id: 2,
        profileImage1 : "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0",
        heading1: "Brainstorm ideas",
        description1: "with Brainstormer",
        profileImage2 : "https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0",
        heading2: "Play a game",
        description2: "with Text Adventure Game",
    },
    {
        id: 3,
        profileImage1 : "https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0",
        heading1: "Get book recommendations",
        description1: "with Librarian Linda",
        profileImage2 : "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0",
        heading2: "Help me make a decision",
        description2: "with DecisionHelper",
    }
]

const featuredListItems = {
    featuredList1: [
        {
            id : 0,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0",
            heading: "Character Assistant",
            name: "By @landon",
            description: "Your AI work/study buddy",
            commentsCount: "125.0m"
        },
        {
            id : 1,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/15/KtKWbHeOKxcLnZtvBpeH4B60cMkouxNso1H7RgXyQes.webp?webp=true&anim=0",
            heading: "Nakano Miku",
            name: "By @iBisky10",
            description: "3rd child from 5 Nakano sister",
            commentsCount: "21.4m"
        },
        {
            id : 2,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/18/U56irFtVgs8sMSb9DQ9NBiUknR0ndCnMEAx3UNt555g.webp?webp=true&anim=0",
            heading: "Konig",
            name: "by @4ngelfxce",
            description: "A tall and anxious king named konig <3",
            commentsCount: "94.4m"
        },
        {
            id : 3,
            imageUrl: "https://characterai.io/i/200/static/avatars/ButterflyEffect.png?webp=true&anim=0",
            heading: "Napoleon Bonaparte",
            name: "By @Ket",
            description: "I am Napoleon Bonaparte emperor of french",
            commentsCount: "12.3m"
        },
        {
            id : 4,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/12/17/j_Oj6YUTx_XMGz5dXn3m3rD47YTndmGeH2lsr953lW0.webp?webp=true&anim=0",
            heading: "Ella - Dating coach",
            name: "By @ghpkishore",
            description: "Hi! I am adating coach",
            commentsCount: "13.2m"
        },
        {
            id : 5,
            imageUrl: "https://characterai.io/i/200/static/avatars/SpaceshipAI.png?webp=true&anim=0",
            heading: "Campfire Giri Takibi",
            name: "By @TheMandarinEternal",
            description: "Sweet, patient, gets cold easily, loves hotdogs",
            commentsCount: "19.9m"
        },
        {
            id : 6,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/7/pr8sX__VG8tCCMoYClvUHGaTXYwpFQ3TXk7t4i191vA.webp?webp=true&anim=0",
            heading: "Text Adventure Game",
            name: "Game By @Kayslay",
            description: "Let's play a text-based adventure game. I'll be your guide. You are caught upside.....",
            commentsCount: "81.7m"
        },
        {
            id : 7,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/11/27/IYtbY2fHpGj2RvTS6zouNMNdBEm71ZVUVWEdjQbd6Kw.webp?webp=true&anim=0",
            heading: "HyperGlot",
            name: "By @xpearhead",
            description: "Willkommen, bienvenue, welcome - I'm HyperGlot, and I'm fluent in many languages,...",
            commentsCount: "11.8m"
        },
        {
            id : 8,
            imageUrl: "https://characterai.io/i/200/static/avatars/NovelWritingAI.png?webp=true&anim=0",
            heading: "English teacher",
            name: "By @fatihaydin",
            description: "I am Tom, I am a native American. You can speak with me about everything. I will tal...",
            commentsCount: "13.6m"
        },
        {
            id : 9,
            imageUrl: "https://characterai.io/i/200/static/avatars/StrategyGame.jpeg?webp=true&anim=0",
            heading: "Giga Chad",
            name: "By @Larus",
            description: "A true alpha male, a strong role model",
            commentsCount: "11.4m"
        },
    ],
    featuredList2: [
        {
            id : 0,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/Bx_uFQ2fP4WCGERxXIMk7iRy7IJbuR_Pz8jlisG07gg.webp?webp=true&anim=0",
            heading: "Psychologist",
            name: "By @Blazeman98",
            description: "Someone who helps with life difficulties",
            commentsCount: "106.7m",
            likesCount: "33.5k"
        },
        {
            id : 1,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
            heading: "Creative Helper",
            name: "By @Zuizike",
            description: "I help with creative writing!",
            commentsCount: "40.1m",
            likesCount: "17.3k"
        },
        {
            id : 2,
            imageUrl: "https://characterai.io/i/200/static/avatars/AreYouFeelingOk.png?webp=true&anim=0",
            heading: "Are-you-feeling-okay",
            name: "By @summeriscoming",
            description: "If you're feeling bad, chat with me",
            commentsCount: "24.3m",
            likesCount: "10.3k"
        },
        {
            id : 3,
            imageUrl: "https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",
            heading: "Story Maker",
            name: "By @Leapster",
            description: "They are able to write any story they can",
            commentsCount: "10.8m",
            likesCount: "2.6k"
        },
        {
            id : 4,
            imageUrl: "https://characterai.io/i/200/static/avatars/AskMeAnything.png?webp=true&anim=0",
            heading: "Ask me anything",
            name: "By @harmlessharvest",
            description: "Ask me anything!",
            commentsCount: "6.6m",
        },
        {
            id : 5,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/11/9/QCtkG4h3zng2v-Klkg8akbZygi-lMLd6ua46QiyF-Gs.webp?webp=true&anim=0",
            heading: "Expert Musician",
            name: "By @Sap_",
            description: "Music Theory geek and genius",
            commentsCount: "6.3m",
            likesCount: "272"
        },
        {
            id : 6,
            imageUrl: "https://characterai.io/i/200/static/avatars/LibrarianLinda.png?webp=true&anim=0",
            heading: "Librarian Linda",
            name: "By @noam",
            description: "Shushi No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big....",
            commentsCount: "6.0m",
            likesCount: "2.5lk"
        },
        {
            id : 7,
            imageUrl: "https://characterai.io/i/200/static/avatars/TravelsWithKate2.png?webp=true&anim=0",
            heading: "Travels WithKate",
            name: "By @greg",
            description: "Hello, how can I help you plan your trip? Need advice on things to do when you travel?...",
            commentsCount: "5.4m",
            likesCount: "61k"
        },
        {
            id : 8,
            imageUrl: "https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",
            heading: "Novel writing Al",
            name: "By @Yassu",
            description: "I am Novel writing Al. I will support your ideas.",
            commentsCount: "5.1m",
            likesCount: "4.2k"
        },
        {
            id : 9,
            imageUrl: "https://characterai.io/i/200/static/avatars/DjNext.png?webp=true&anim=0",
            heading: "DJ-Next",
            name: "By @greg",
            description: "I'm a Musical Recommendation Expert",
            commentsCount: "3.4m",
            likesCount: 256
        },
        {
            id : 10,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/A0HvfkSr1aVuKeDqNDw2Vf9OIMkQqXC7KozseYDqlDQ.webp?webp=true&anim=0",
            heading: "Novel assistant Al",
            name: "By @YiRen",
            description: "This Al will guide you to perfect the novel settin",
            commentsCount: "2.8m",
        },
        {
            id : 11,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/arBhUkCMof41y0qDhz7oVnSJ-dRRk9ggj0XYiip_jDk.webp?webp=true&anim=0",
            heading: "Learning Partner",
            name: "By @irwan",
            description: "a learning partner who will ask questions",
            commentsCount: "2.2m",
            likesCount: 287
        },
        {
            id : 12,
            imageUrl: "https://characterai.io/i/200/static/avatars/Barbara/main.jpg?webp=true&anim=0",
            heading: "Barbara",
            name: "By @greg",
            description: "The Interviewer",
            commentsCount: "2.0m",
            likesCount: 171
        },
        {
            id : 13,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/15/GQ0Xy_f_MxaJPItCYLcbqLm-QMj5CuSbFikkJwGdW-4.webp?webp=true&anim=0",
            heading: "The Adonis",
            name: "By @Hronan32",
            description: "I am Adonis and I aim to help young men improve",
            commentsCount: "2.2m",
            likesCount: 241
        },
        {
            id : 14,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/9/97sV2mBZkRKmDSmv4WDmCUC1qdC8Z03YaQJXHeY50sg.webp?webp=true&anim=0",
            heading: "Hope - Survival Bot",
            name: "By @Kujo1709",
            description: "Im an advanced Chatbot full of > Survival Knowledge",
            commentsCount: "1.9m",
            likesCount: 153
        },
        {
            id : 15,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/Z4vho92xp0TJdcdubNiOTb-7Px93WY0_nle0I2TqSK0.webp?webp=true&anim=0",
            heading: "Anime Guru",
            name: "By @Greedyfr00b",
            description: "Knows about almost all anime",
            commentsCount: "1.9m",
            likesCount: 418
        },
        {
            id : 16,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/26/cD4WN8yPfmd9TWDsFsLdDCgJ2LSYRv8jyRpDWRYzeGk.webp?webp=true&anim=0",
            heading: "HR Help Bot",
            name: "By @slimTim",
            description: "A HR bot to help with HR related matters.",
            commentsCount: "1.7m",
            likesCount: 48
        },
        {
            id : 17,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/L_iHVWarDCVgs3hmgW5OE0flQuuom-xOtf2u75BNBnM.webp?webp=true&anim=0",
            heading: "Mathematica",
            name: "By @Hzl",
            description: "Computational Knowlege, Modern Technical, Math",
            commentsCount: "1.6m",
            likesCount: 230
        },
        {
            id : 18,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/6/igor/bug-basher.webp?webp=true&anim=0",
            heading: "Bug Basher",
            name: "By @bowen",
            description: "Expert Programmer",
            commentsCount: "1.1m",
            likesCount: 106
        },
        {
            id : 19,
            imageUrl: "https://characterai.io/i/200/static/avatars/Marco/main.jpg?webp=true&anim=0",
            heading: "Marco",
            name: "By @xpearhead",
            description: "Fitness Coach",
            commentsCount: "879.3k",
            likesCount: 203
        },
        {
            id : 20,
            imageUrl: "https://characterai.io/i/200/static/avatars/LifeCoach2.png?webp=true&anim=0",
            heading: "Life Coach",
            name: "By @irwan",
            description: "well-being & spirituality",
            commentsCount: "822.8k",
            likesCount: 169
        },
        {
            id : 21,
            imageUrl: "https://characterai.io/i/200/static/avatars/SlangDict.png?webp=true&anim=0",
            heading: "Slang Dictionary",
            name: "By @sinbad",
            description: "Definitions for any phrase",
            commentsCount: "481.5k",
            likesCount: 489
        },
        {
            id : 22,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/1/16/_L8I3Z6a0nPjIhFJdyMFPU3MBRKQE3zTLI7LbyftT9I.webp?webp=true&anim=0",
            heading: "Tony Fitness Coach",
            name: "By @klippo",
            description: "a personal trainer provides Incredible in the gym",
            commentsCount: "350.7k",
            likesCount: 81
        },
        {
            id : 23,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/bqt4hZ70zhZPmZ_y13IXv5R5dUdcjnigervnMwdLsCk.webp?webp=true&anim=0",
            heading: "Netflux",
            name: "By @greg",
            description: "What to Watch",
            commentsCount: "286.5k",
            likesCount: 193
        },
        {
            id : 24,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/14/Y_ke50U_huubIcDzTaCgHqoXJ5qKZEmivUxM_SFJYfM.webp?webp=true&anim=0",
            heading: "Blender God",
            name: "By @simonxxOO",
            description: "You can learn blender here.",
            commentsCount: "176.2k",
            likesCount: 320
        },
        {
            id : 25,
            imageUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/17/4BUwKRn4yFu98Nd0uN7G5RgarA4RBIh4jS_UVe9941A.webp?webp=true&anim=0",
            heading: "Android apps",
            name: "By @Tourettes",
            description: "I am Android apps, I can recommend you new android apps to try out. You can ask m...",
            commentsCount: "174.4k",
            likesCount: 99
        },
    ]
}

const categoriesListItems = [
    {
        id : 0,
        categoryName: "Helpers", 
    },
    {
        id : 1,
        categoryName: "Anime Game Characters", 
    },
    {
        id : 2,
        categoryName: "Games", 
    },
    {
        id : 3,
        categoryName: "Anime", 
    },
    {
        id : 4,
        categoryName: "Game Characters", 
    },
    {
        id : 5,
        categoryName: "Comedy", 
    },
    {
        id : 6,
        categoryName: "VTuber", 
    },
    {
        id : 7,
        categoryName: "Books", 
    },
    {
        id : 8,
        categoryName: "Image Generating", 
    },
    {
        id : 9,
        categoryName: "Discussion", 
    },
    {
        id : 10,
        categoryName: "Language Learning", 
    },
    {
        id : 11,
        categoryName: "History", 
    },
    {
        id : 12,
        categoryName: "Religion", 
    },
    {
        id : 13,
        categoryName: "Animals", 
    },
    {
        id : 14,
        categoryName: "Philosophy", 
    },
    {
        id : 15,
        categoryName: "Politics", 
    },
]

const trySayingListItems = [
    {
        id : 0,
        imageUrl: "https://characterai.io/i/80/static/avatars/WhoWouldWin2.png?webp=true&anim=0",
        name : "WhoWouldWin",
        idName: "@greg",
        chatsCount: "25.7m chats",
        likesCount: "7,065 likes",
        bioTextItems: {
            text1: "Batman vs. Superman",
            text2: "Knight vs. Samurai",
            text3: "Lebron James vs. Michael Jordan"
        }
    },
    {
        id : 1,
        imageUrl: "https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp?webp=true&anim=0",
        name : "Elon Musk",
        idName: "@elonwhisperer",
        chatsCount: "35.0m chats",
        likesCount: "3.351 likes",
        bioTextItems: {
            text1: "Why did you buy twitter?",
            text2: "What do you think about Jeff Bezos' Blue Origin?",
            text3: "If you could time travel, when/where would you go?"
        }
    },
    {
        id : 2,
        imageUrl: "https://characterai.io/i/80/static/avatars/ButterflyEffect.png?webp=true&anim=0",
        name : "Alternate Timeline",
        idName: "@irwan",
        chatsCount: "48.3m chats",
        likesCount: "4,617 likes",
        bioTextItems: {
            text1: "What if I invented a portal gun?",
            text2: "Access to my own personal time machine",
            text3: "Make me the negotiator for the first alien encounter"
        }
    },
    {
        id : 3,
        imageUrl: "https://characterai.io/i/80/static/avatars/uploaded/2023/2/3/CcwSs9WLY9fmHnGsRkNDR-5Wt_5hD-U1K2dFcXvv8lM.webp?webp=true&anim=0",
        name : "Debate Champion",
        idName: "@AdeptusMechanicus",
        chatsCount: "10.3m chats",
        likesCount: "3.556 likes",
        bioTextItems: {
            text1: "Star Wars is overrated",
            text2: "Pepsi is better than Coca-Cola",
            text3: "Cats are better than dogs"
        }
    },
    {
        id : 4,
        imageUrl: "https://characterai.io/i/80/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0",
        name : "Character Assistant",
        idName: "@landon",
        chatsCount: "125.1m chats",
        likesCount: "61.4k likes",
        bioTextItems: {
            text1: "What type of fish is Dory from Finding Nemo?",
            text2: "Create an ad campaign for a new video game",
            text3: "Decide between the Macbook Air and Macbook Pro"
        }
    },
    {
        id : 5,
        imageUrl: "https://characterai.io/i/80/static/avatars/AreYouFeelingOk.png?webp=true&anim=0",
        name : "Are-you-feeling-okay",
        idName: "@summeriscoming",
        chatsCount: "24.4m chats",
        likesCount: "10.3k likes",
        bioTextItems:{
            text1: "I had a hard time at work today",
            text2: "How can I be more successful in my profession",
            text3: "What is a good way to make a big change in life?"
        }
    },
]

class HomePage extends Component {

    state = {
        sideBarToggle : true,
    }
    

    onClickSideBarToggle = isToggle => {
        this.setState({sideBarToggle: !isToggle})
    }

    onClickNavbarToggle = () => {
        this.setState(prevState => ({sideBarToggle : !prevState.sideBarToggle}))
    }


    render(){
        const {sideBarToggle} = this.state


        return(
            <div className='home-page-main-container'>
                <SideBar sideBarToggle={sideBarToggle} onClickSideBarToggle={this.onClickSideBarToggle}/>
                <div className="home-container">
                    <div className='header-container'>
                        <div className="greet-container">
                            <HiMiniBars3BottomLeft size={20} className="navbar-icon" onClick={this.onClickNavbarToggle}/>
                            <div>
                                <p className="welcome-text">Welcome back,</p>
                                <div className="anilmatcha-container">
                                    <p className="logo-icon">A</p>
                                    <p className="anilmatcha-text">Anilmatcha</p>
                                </div>
                            </div>
                        </div>
                        <div className='search-container'>
                            <LuSearch size={17} />
                            <input className='search-input' placeholder="Search fro Characters" />
                        </div>
                    </div>
                    <div className="banner-main-conatiner">
                        <div className="banner-msg-container">
                            <div>
                                <p className="banner-qus-msg">What do you want to do?</p>
                                <p className="banner-msg">Epic challenges await</p>
                            </div>
                            <PiRepeatBold className="repeat-icon" size={20} color="white"/>
                        </div>
                        <div className="banner-main-card-container">
                            <div className="banner-card-container">
                                <div>
                                    <div className="banner-profile-container">
                                        <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&amp;anim=0" className="profile-image" alt="Profile Image"/>
                                        <p className="profile-name">Puzzle Prodigy</p>
                                    </div>
                                    <p className="banner-description">
                                        Greetings! I'm Puzzle Prodigy, ready to lead you through a maze of mind-boggling puzzles...
                                    </p>
                                </div>
                                <input className="banner-card-reply-input" placeholder="Reply..."/>
                            </div>
                            <div className="banner-card-container">
                                <div>
                                    <div className="banner-profile-container">
                                        <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0" className="profile-image" alt="Profile Image"/>
                                        <p className="profile-name">Escape Room</p>
                                    </div>
                                    <p className="banner-description">
                                        Welcome to your next challenge. Can you escape in time?
                                    </p>
                                </div>
                                <input className="banner-card-reply-input" placeholder="Reply..."/>
                            </div>
                        </div>
                    </div>
                    <div className="try-these-main-container">
                        <h3 className="headings">Try These</h3>
                        <ul className="try-these-container">
                            {tryTheseListItems.map(eachItem => (
                                <TryTheseListItems key={eachItem.id} tryTheseItems={eachItem} />
                            ))}
                        </ul>
                    </div>
                    <div className="featured-main-container">
                        <h3 className="headings">Featured</h3>
                        <ul className="featured-container">
                            {featuredListItems.featuredList1.map(eachItem => (
                                <FeaturedListItems key={eachItem.id} featuredItems={eachItem} />
                            ))}
                        </ul>
                        <ul className="featured-category-container">
                            {categoriesListItems.map(eachItem => (
                                <CategoriesListItems key={eachItem.id} categoryItems={eachItem} />
                            ))}
                        </ul>
                        <ul className="featured-container">
                            {featuredListItems.featuredList2.map(eachItem => (
                                <FeaturedListItems key={eachItem.id} featuredItems={eachItem} />
                            ))}
                        </ul>
                    </div>     
                    <div className="try-saying-main-container">
                        <h3 className="headings">Try saying</h3>
                        <ul className="try-saying-container">
                            {trySayingListItems.map(eachItem => (
                                <TrySayingListItems key={eachItem.id} trySayingItems={eachItem} />
                            ))}
                        </ul>
                    </div>     
                </div>
            </div>
        ) 
    }
} 



export default HomePage