import Weather from "./Weather";
import GermanyMap from "./GermanyMap";
import TvProgram from "./TvProgram";
import Visited from "./Visited";

/**Компонент, отображающий нижнюю часть страницы**/

export default function Footer (props) {
    return (
        <div className="footer">
            <Weather />
            <GermanyMap />
            <TvProgram /> 
            <Visited/>
        </div>
    );
}