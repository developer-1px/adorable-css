import { createGenerator } from 'unocss';
import { describe, it, expect } from 'vitest';
import { adorableCSS, splitByTopLevelPlus } from './adorable-css-uno';

// UnoCSS 설정
const uno = createGenerator({
	...adorableCSS()
});

describe('UnoCSS Compilation', () => {
	it('utils', () => {
		const res = splitByTopLevelPlus('c(#ccc.5)+bold+font(11/16)');
		console.log('res', res);
		expect(res).includes('c(#ccc.5)');
		expect(res).includes('bold');
	});

	it('compiles basic utility', async () => {
		const { css } = await uno.generate(
			`c(#ccc.2) bold! w(50%) c(red)+w(100%) w(5+100) overflow-x(scroll) overflow-y(hidden)
			
			hbox(right) vbox(center) pack! hover:bold font(20)!
			`
		);
		console.log('>>>>> csscsscsscss', css);
		expect(css).toContain('color:red;');
	});
});
