console.log('=== 开始测试 ===');

try {
    console.log('1. 检查 MDViewerStandalone 类是否存在');
    if (typeof MDViewerStandalone === 'undefined') {
        console.error('❌ MDViewerStandalone 未定义');
    } else {
        console.log('✅ MDViewerStandalone 已定义');
        
        console.log('2. 尝试创建实例');
        try {
            const test = new MDViewerStandalone();
            console.log('✅ 实例创建成功');
        } catch (e) {
            console.error('❌ 实例创建失败:', e.message);
            console.error(e.stack);
        }
    }
} catch (e) {
    console.error('❌ 发生错误:', e.message);
    console.error(e.stack);
}

console.log('=== 测试结束 ===');
