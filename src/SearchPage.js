import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './searchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className ="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="//yt3.ggpht.com/ytc/AAUvwnjTR0zxYgR90mdthSbGQjw6UgXrQ2NIvHWXQviVcg=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel = "Geekyranjit"
                verified
                subs = "3.22M"
                noOfVideos= {3009}
                description = "Thanks for making this channel the Biggest and most Subscribed English Tech Channel in India! Here you would find Reviews on ..."
            />

            <hr/>

            <div className="latest__from"><h4>Latest from Geekyranjit</h4></div>

            <VideoRow
                views = "88K"
                subs = "3.22M"
                description = "Poco M3 Pro 5G smartphone unboxing and hands on overview the Poco M3 Pro comes with the new Dimensity 700 Octa Core ..."
                timestamp = "23 hours ago" 
                channel = "Geekyranjit"
                title = "Poco M3 Pro 5G Unboxing & Overview Affordable 5G Phone"
                image = "https://i.ytimg.com/vi/ibwQBMnBfZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2I6yZR7k5IvfFcNgTLe6RofWR8A"    
            />

            <VideoRow
                views = "143K"
                subs = "3.22M"
                description = "iQOO Z3 Unboxing & hands on overview with some camera samples the iQOO Z3 comes with the new Snapdragon 768G chipset ..."
                timestamp = " 2 days ago" 
                channel = "Geekyranjit"
                title = "iQOO Z3 5G Unboxing & Overview - Ideal Mid-Ranger?"
                image = "https://i.ytimg.com/vi/3zD8Q1xAabo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVp6E5yNfzChd_xwzqky9OVEWWLA"    
            />

            <VideoRow
                views = "5.6K"
                subs = "3.22M"
                description = "Realme X7 Max Unboxing and overview including 11 point practical comparison with Xiaomi Mi 11x smartphones as both are ..."
                timestamp = "26 minuts ago" 
                channel = "Geekyranjit"
                title = "Realme X7 Max Unboxing & Practical Comparison with Mi 11x"
                image = "https://i.ytimg.com/an_webp/gonLdgXPFk0/mqdefault_6s.webp?du=3000&sqp=CPvlhoYG&rs=AOn4CLBPmGFel065wJBzBzNtFknDZm6GMA"    
            /> 
            <VideoRow
                views = "174K"
                subs = "3.22M"
                description = "Samsung Galaxy S21 Ultra 5g smartphone my experience and camera review with tons of sample videos and pictures while I was ..."
                timestamp = "4 month ago" 
                channel = "Geekyranjit"
                title = "Samsung Galaxy S21 Ultra 5G My Experience & Camera Review"
                image = "https://i.ytimg.com/vi/-GLvqhnVRtc/mqdefault.jpg"    
            />
            <VideoRow
                views = "1.5M"
                subs = "3.22M"
                description = "Samsung Galaxy M31 Review with it's Pros & Cons is this the ideal mid-range smartphone from Samsung find out in the review."
                timestamp = "1 year ago" 
                channel = "Geekyranjit"
                title = "Samsung Galaxy M31 Review with Pros & Cons"
                image = "https://i.ytimg.com/vi/p_74rIzhOtQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDa-DJYzKIYRFM6-gjnjblaZ76ADQ"    
            />
            <VideoRow
                views = "347K"
                subs = "3.22M"
                description = "iPhone 12 Pro Unboxing & Overview this latest new iPhone has the new Apple A14 bionic chip based on 5nm process comes with ..."
                timestamp = "7 month ago" 
                channel = "Geekyranjit"
                title = "iPhone 12 Pro Unboxing Overview & My Initial Impressions"
                image = "https://i.ytimg.com/vi/QL8bX40qcpY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCXRYgepgCoYw-aQ8CqIwqekjA0Aw"    
            />
            <VideoRow
                views = "231K"
                subs = "3.22M"
                description = "Samsung Galaxy A52 Smartphone unboxing & overview including camera samples the Galaxy A52 is powered by the ..."
                timestamp = "2 month ago" 
                channel = "Geekyranjit"
                title = "Samsung Galaxy A52 Unboxing & Overview (Indian Unit)"
                image = "https://i.ytimg.com/vi/RxcmK9FEd7A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPZjey3Jnxg6dLvQJlczGKazpd7g"    
            />
            <VideoRow
                views = "423K"
                subs = "3.22M"
                description = "Pixel 4a smartphone review with it's pros & cons what do I feel about this new smartphone by Google after using it find out in this ..."
                timestamp = "7 month ago" 
                channel = "Geekyranjit"
                title = "Pixel 4a Smartphone Review with Pros & Con the Little Gem "
                image = "https://i.ytimg.com/vi/k4DypieamcE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCkgf9a49bPKCV-SaS5B2rVHYoug"    
            />                                             


        </div>
    )
}

export default SearchPage
