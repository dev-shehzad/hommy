
import AlternatingFeatures from "@/app/components/AlternatingFeatures"
import HeaderBanner from "@/app/components/HeaderBanner"
import HighlightSection from "@/app/components/HighlightSection"
import HoneymoonSection from "@/app/components/honeymoon-section"
import HoneymoonLayout from "@/app/components/HoneymoonLayout"
import ImageLayout from "@/app/components/ImageLayout"
import LocalLifeBanner from "@/app/components/LocalLifeBanner"
import PopularPlaces from "@/app/components/PopularPlaces"
import ThreeColumnInfo from "@/app/components/ThreeColumnInfo"
    
    
    
    
    const  page=()=> {
        return (
        <main>
        <HoneymoonSection/>
        <HeaderBanner/>
        <HoneymoonLayout/>
        <PopularPlaces/>
        <LocalLifeBanner/>
        <ImageLayout/>
        <HighlightSection/>
        <ThreeColumnInfo/>
        <AlternatingFeatures/>
        </main>
        )}
    
    
        export  default page