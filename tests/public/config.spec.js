import { CONFIG, CONFIG_MAP } from '../../public/js/config';

test('config.js 常量类型', () => {
    expect(typeof CONFIG).toBe('object');
    expect(typeof CONFIG_MAP).toBe('object');
});
