// @ts-check
/**
 * @param {string} str
 */
export function escapeSpecialChars(str) {
	return str
		.replace(/&/g, "&apm;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

/**
 * @param {string} html
 */
export function htmlToElement(html) {
	const template = document.createElement("template");
	template.innerHTML = html;
	return template.content.firstElementChild;
}

/**
 * @param {string[]} strings
 * @param {any[]} values
 */
export function element(strings, ...values) {
	const htmlString = strings.reduce((result, str, i) => {
		const value = values[i - 1];
		if (typeof value === "string") {
			return result + escapeSpecialChars(value) + str;
		} else {
			return result + String(value) + str;
		}
	});
	return htmlToElement(htmlString);
}

/**
 * @param {Element} bodyElement
 * @param {HTMLElement} containerElement
 */
export function render(bodyElement, containerElement) {
	containerElement.innerHTML = "";
	containerElement.appendChild(bodyElement);
}
