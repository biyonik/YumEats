import TopNav from "../TopNavComponent/TopNav.jsx";
import Featured from "../FeaturedComponent/Featured.jsx";
import Delivery from "../DeliveryComponent/Delivery.jsx";
import TopPicks from "../TopPicksComponent/TopPicks.jsx";
import Meal from "../MealComponent/Meal.jsx";
import Categories from "../CategoriesComponent/Categories.jsx";
import NewsLetter from "../NewsLetterComponent/NewsLetter.jsx";
import Footer from "../FooterComponent/Footer.jsx";

function App() {
    return (
        <div>
            <TopNav />
            <Featured />
            <Delivery />
            <TopPicks />
            <Meal />
            <Categories />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default App
