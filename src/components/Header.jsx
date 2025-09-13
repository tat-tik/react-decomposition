import News from "./News";
import ExchangeRate from "./ExchangeRate";

/**Компонент, отображающий верхнюю часть страницы**/

export default function Header (props) {
    return (
        <div className="header">
            <News />
            <ExchangeRate/>
        </div>
    );
}

