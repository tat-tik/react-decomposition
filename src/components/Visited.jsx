/**Компонент, отображающий информацию о посещаемых страницах,
 *  является импортируемым компонентом в компонент Footer**/

export default function Visited  (props) {
    return (
        <p className="placeholder-glow visited">
            <span className="placeholder col-12">Visited component</span>
        </p>
    );
}
