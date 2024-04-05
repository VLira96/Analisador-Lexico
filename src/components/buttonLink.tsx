import { Link } from "react-router-dom"
import IButtonLink from "../interfaces/IButtonLink";

const ButtonLink = (props: IButtonLink) => {
    return(
        <Link className="p-4 text-xl" to={props.to}>{props.children}</Link>
    );
}

export default ButtonLink;