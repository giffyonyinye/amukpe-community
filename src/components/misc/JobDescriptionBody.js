import {useState, useEffect} from "react";
import Interweave from "interweave";

const JobDescriptionBody = ({description}) => {
	const [body, setBody] = useState(null);
	useEffect(() => {
		function createTextLinks_(text) {
			return (text || "").replace(/([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi,
				function (match, space, url) {
					var hyperlink = url;
					if (!hyperlink.match("^https?://")) {
						hyperlink = "http://" + hyperlink;
					}
					return space + '<a id="description_link" target="_blank" href="' + 
						hyperlink + '">' + url + "</a>";
				}
			);
		}
		const __data = createTextLinks_(description);
		setBody(__data);

	}, [description])

	return (
		<span>{
			body !== null?
			<Interweave
				content={body}
			/>:''
		}</span>
	)
}

export default JobDescriptionBody;