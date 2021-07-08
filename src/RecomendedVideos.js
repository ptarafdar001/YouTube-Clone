import React from 'react'
import VideoCard from './VideoCard'
import './RecomendedVideos.css'


const RecomendedVideos = () => {
    return (
        <div className = 'recomendedVideos'>
            <h2>Recommended </h2>
            <div className = "recommendedVideos__videos">
              
                 <VideoCard
                    title = "This is iphone 12 pro"
                    views = "24M views"
                    timestamp = "7 month ago"
                    channelImg = "https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s88-c-k-c0x00ffffff-no-rj"
                    channel = "Apple"
                    image = "	https://i.ytimg.com/vi/cnXapYkboRQ/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLABZxur5qOXedqrx6OCw7S7tnvXHg"
                />
                <VideoCard
                    title = "Google interns' first week"
                    views = "11M views"
                    timestamp = "8 yers ago"
                    channelImg = "https://yt3.ggpht.com/ytc/AAUvwnj9PvCgb44_6oy39dZfFvVXYzN0_LvKhbUu9ggRCOE=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Google"
                    image = "https://i.ytimg.com/vi/9No-FiEInLA/sddefault.jpg"
                />
                <VideoCard
                     title = "Inside Apple's $5 Billion Headquarters"
                     views = "1M views"
                     timestamp = "3 month ago"
                     channelImg = "https://yt3.ggpht.com/ytc/AAUvwnhKlXIUI8Yw8kCCkvzsPMiw9kKUBY36QgcEV2DIoA=s68-c-k-c0x00ffffff-no-rj"
                     channel = "Apple Explained"
                     image = "https://i.ytimg.com/vi/T9dJ_cE5Asw/sddefault.jpg"
                />
                <VideoCard
                    title = "Google Data Center Security: 6 Layers Deep"
                    views = "4.6M views"
                    timestamp = "11 month ago"
                    channelImg = "	https://yt3.ggpht.com/ytc/AAUvwnjQ_JPwSLka-OWR-0uiTQQeiqav3I8LO0YTEg_2kH4=s68-c-k-c0x00ffffff-no-rj"
                    channel = "Google Cloud Tech"
                    image = "https://i.ytimg.com/vi/kd33UVZhnAA/sddefault.jpg"
                />	
                <VideoCard
                     title = "Detailed Roadmap for Machine Learning | Free Study Resources | Simply Explained"
                     views = "14k views"
                     timestamp = "1 hour ago"
                     channelImg = "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s68-c-k-c0x00ffffff-no-rj"
                     channel = "Apna College"
                     image = "	https://i.ytimg.com/vi/1vsmaEfbnoE/sddefault.jpg"
                />
                <VideoCard
                     title = "Samsung Galaxy S21 Ultra 5G Unboxing & First Looks (Indian Unit)"
                     views = "277k views"
                     timestamp = "4 month ago"
                     channelImg = "	https://yt3.ggpht.com/ytc/AAUvwnjTR0zxYgR90mdthSbGQjw6UgXrQ2NIvHWXQviVcg=s48-c-k-c0x00ffffff-no-rj"
                     channel = "Geekyranjit"
                     image = "https://i.ytimg.com/vi_webp/VEdGDpAHBBs/mqdefault.webp"
                />
                <VideoCard
                     title = "The Fastest Ferrari in the World | SF90"
                     views = "881k views"
                     timestamp = "2 month ago"
                     channelImg = "https://yt3.ggpht.com/ytc/AAUvwngbEWOM7R51rHaBstD_vh2LCyiQKDwx7P8NVVnGSw=s48-c-k-c0x00ffffff-no-rj"
                     channel = "Suparcar Blondie"
                     image = "https://i.ytimg.com/vi/J_u0Sw-WIE0/mqdefault.jpg"
                />
                <VideoCard
                    title = "This is iphone 12 pro"
                    views = "24M views"
                    timestamp = "7 month ago"
                    channelImg = "https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s88-c-k-c0x00ffffff-no-rj"
                    channel = "Apple"
                    image = "	https://i.ytimg.com/vi/cnXapYkboRQ/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLABZxur5qOXedqrx6OCw7S7tnvXHg"
                />

            </div>
        </div>
    )
}

export default RecomendedVideos
