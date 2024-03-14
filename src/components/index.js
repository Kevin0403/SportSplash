import Input from "./Input";
import Button from "./Button";
import Signin from "./login/signin/Signin";
import Signup from "./login/signup/Signup";
import Protected from "./AuthLayout";
import Select from "./Select";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import CreateTournament from "./create-tournament/CreateToutnament";
import CommonHeader from "./header/CommonHeader";
import Tournament from "./Tournament/Tournament";
import Team from './Tournament/Teams/Team'
import Teams from './Tournament/Teams/Teams'
import Player from "./Tournament/Players/Player";
import Players from "./Tournament/Players/Players";
import Card from "./Card";
import CreateMatch from "./Tournament/Matches/CreateMatch";
import Matches from "./Tournament/Matches/Matches";
import MatchCard from "./Tournament/Matches/MatchCard";
import NameCard from "./NameCard";
import SelectGames from "./create-tournament/SelectGames";
import BadmintonMatch from "./matches/badmintan/Badmintan";
import SelectCreateOption from "./create-tournament/SelectCreateOption";
import ShowMatches from "./matches/ShowMatches";
import ShowTournaments from "./Tournament/ShowTournaments";
import CreateUserMatch from "./create-match/CreateUserMatch";
import FloatingInput from "./FloatingInput";
import Kabaddi from "./matches/kabaddi/Kabaddi";
import ContactDetails from "./contact/ContactDetails";
import ContactForm from "./contact/ContactForm";
import Logo from "./Logo";
import ImageSlider from "./slider/ImageSlider";
import { IMAGES as HomeSliderImages } from "./data/SliderImages";
import TournamentOverview from "./Tournament/TournamentOverview";
import ShowProfileTabs from "./profile/ShowTabs";

export {
    ShowProfileTabs,
    TournamentOverview,
    HomeSliderImages,

    ImageSlider,
    Logo,
    ContactForm,
    ContactDetails,
    Kabaddi,
    FloatingInput,
    CreateUserMatch,
    ShowTournaments,
    ShowMatches,
    SelectCreateOption,
    BadmintonMatch,
    SelectGames,
    NameCard,
    MatchCard,
    Matches,
    CreateMatch,
    Card,
    Player,
    Players,
    Team,
    Teams,
    Tournament,
    CommonHeader,
    Input,
    Button,
    Signin,
    Signup,   
    Protected,
    Select,
    Header,
    Footer,
    CreateTournament
}