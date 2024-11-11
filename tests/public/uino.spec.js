import uino from '../../public/js/uino';

test('uino.js 常量类型', () => {
    expect(typeof uino).toBe('object');
});

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            code: 0,
            data: {},
            msg: '',
        },
    })),
    post: jest.fn(() => Promise.resolve({
        data: {
            code: 0,
            data: {},
            msg: '',
        },
    })),
}));

test('uino.js 请求数据', () => {
    uino.remote.testGet();
    uino.remote.testGet((x) => {
        expect(x.code).toBe(0);
    });

    uino.remote.testPost();
    uino.remote.testPost((x) => {
        expect(x.code).toBe(0);
    });
});
