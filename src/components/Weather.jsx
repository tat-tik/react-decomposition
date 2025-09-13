/**Компонент, отображающий информацию о погоде,
 *  является импортируемым компонентом в компонент Footer**/

export default function Weather (props) {
    return (
        <p className="placeholder-glow weather">
            <span className="placeholder col-12">Weather component</span>
        </p>
    );
}
