import { cac } from 'cac';
import { build } from './build';

export const VERSION_CLI = '0.1.0' as const;

const cli = cac('wave-css');

cli
	.command('[root]', 'build for production')
	.alias('build')
	.option('-o, --out <dir>', '[string] output Directory', {
		default: 'wave.css'
	})
	.option('-w, --watch', 'rebuilds when modules have changed on disk', {
		default: false
	})
	.option('-m, --minify', 'minify output css', {
		default: false
	})
	.option('-v, --verbose', 'verbose build output', {
		default: false
	})
	// --no-reset 옵션이 --reset 옵션을 무시하는 역할이지, flag 역할이 아니었음...
	// 의도대로 동작하긴 하는데, --help 설정에서 default 값 표현이 반대로 되버림
	.option('--no-reset', 'exclude reset css from output', {
		default: false
	})
	.action(build);

cli.help();
cli.version(VERSION_CLI);

if (require.main === module) {
	cli.parse(process.argv, { run: true });
}

export default cli;
