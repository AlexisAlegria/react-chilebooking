import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h3 className="homeTitle">Browse by property type</h3>
                <PropertyList />
                <h3 className="homeTitle">Homes guests love</h3>
                <FeaturedProperties />
            </div>
        </div>
    )
}
