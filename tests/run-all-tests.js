const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

class TestRunner {
    constructor() {
        this.testFiles = [
            'tests/unit/PassaBolaApp.test.js',
            'tests/unit/RealAPIManager.test.js',
            'tests/unit/NewsPage.test.js',
            'tests/unit/ShopPage.test.js'
        ];
        this.results = [];
    }

    async runTest(testFile) {
        return new Promise((resolve) => {
            console.log(`\n🧪 Running ${testFile}...`);
            console.log('='.repeat(50));
            
            const child = spawn('node', [testFile], {
                stdio: 'inherit',
                cwd: process.cwd()
            });

            child.on('close', (code) => {
                const result = {
                    file: testFile,
                    success: code === 0
                };
                this.results.push(result);
                resolve(result);
            });

            child.on('error', (error) => {
                console.error(`Error running ${testFile}:`, error.message);
                this.results.push({
                    file: testFile,
                    success: false,
                    error: error.message
                });
                resolve({ file: testFile, success: false });
            });
        });
    }

    checkProjectFiles() {
        console.log('🔍 Checking project files...\n');
        
        const requiredFiles = [
            'index.html',
            'src/js/api-config.js',
            'src/js/real-apis.js', 
            'src/js/script.js',
            'src/js/seed.js',
            'src/css/styles.css',
            'src/pages/about.html',
            'src/pages/contact.html',
            'src/pages/news.html',
            'src/pages/shop.html',
            'docs/api-endpoints.md',
            'README.md'
        ];

        let allFilesExist = true;
        
        requiredFiles.forEach(file => {
            if (fs.existsSync(file)) {
                console.log(`✅ ${file}`);
            } else {
                console.log(`❌ ${file} - MISSING`);
                allFilesExist = false;
            }
        });

        console.log(`\n📊 Project Status: ${allFilesExist ? '✅ Complete' : '❌ Incomplete'}`);
        return allFilesExist;
    }

    async runAllTests() {
        console.log('🚀 Starting Passa Bola Test Suite...\n');

        this.checkProjectFiles();
        console.log('\n' + '='.repeat(50));

        for (const testFile of this.testFiles) {
            await this.runTest(testFile);
        }

        this.printSummary();
    }

    printSummary() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 TEST SUITE SUMMARY');
        console.log('='.repeat(60));

        const passed = this.results.filter(r => r.success).length;
        const failed = this.results.length - passed;

        this.results.forEach(result => {
            const status = result.success ? '✅' : '❌';
            const fileName = path.basename(result.file);
            console.log(`${status} ${fileName}`);
            if (result.error) {
                console.log(`   Error: ${result.error}`);
            }
        });

        console.log('\n📈 Results:');
        console.log(`✅ Passed: ${passed}`);
        console.log(`❌ Failed: ${failed}`);
        console.log(`🎯 Success Rate: ${Math.round((passed / this.results.length) * 100)}%`);

        if (failed === 0) {
            console.log('\n🎉 All tests passed! Your code is working correctly.');
        } else {
            console.log('\n⚠️  Some tests failed. Please check the output above.');
        }
    }
}

if (require.main === module) {
    const runner = new TestRunner();
    runner.runAllTests().catch(console.error);
}

module.exports = TestRunner;