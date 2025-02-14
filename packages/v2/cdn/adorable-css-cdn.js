const generateCss = (classList) => {
	const css = [];
	for (const className of classList) {
		css.push(`.${className} {`);
		css.push(`\t/* Add your styles here */`);
		css.push(`}`);
	}
	return css.join('\n');
};

if (typeof window !== 'undefined') {
	const styleSheet = document.createElement('style');
	document.head.appendChild(styleSheet);

	const classList = new Set();

	const updateStyles = () => {
		styleSheet.innerHTML = generateCss(classList);
	};

	// 변경된 요소들의 클래스만 확인
	const handleMutationsClass = (mutations) => {
		let hasNewClasses = false;

		mutations.forEach(mutation => {
			// 클래스 속성이 변경된 경우
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				mutation.target.classList.forEach(className => {
					if (!classList.has(className)) {
						classList.add(className);
						hasNewClasses = true;
					}
				});
			}

			// 새로운 노드가 추가된 경우
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach(node => {
					if (node.classList) {
						node.classList.forEach(className => {
							if (!classList.has(className)) {
								classList.add(className);
								hasNewClasses = true;
							}
						});
					}
				});
			}
		});

		if (hasNewClasses) {
			updateStyles();
		}
	};

	// 초기 클래스 수집
	const initClassStyle = () => {
		document.querySelectorAll('*[class]').forEach(el => {
			el.classList.forEach(className => classList.add(className));
		});
		updateStyles();
	};

	const observer = new MutationObserver(handleMutationsClass);

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
		childList: true,
		subtree: true
	});

	// 초기 실행
	initClassStyle();
}