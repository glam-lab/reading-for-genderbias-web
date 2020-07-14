/* eslint-disable no-undef */
describe('A blurb', function() {

    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
        await page.type(SEL_TEXTAREA, TEXT);

        const button = await page.$(SEL_SUBMIT);
        await button.click();
    });

    after(async function() {
        await page.close();
    });

    it('should appear', async function() {
        await page.waitFor(SEL_CONTAINER);
        expect(await page.$(SEL_CONTAINER)).to.exist;
    });

    it('should have the style class "notice"', async function() {
        await page.waitFor(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });

    it('should have the style class "negativeBias"', async function() {
        await page.waitFor(SEL_NEGATIVEBIAS);
        expect(await page.$$(SEL_NEGATIVEBIAS)).to.have.lengthOf(1);
    });

    it('should be highlighted on mouseover', async function() {
        await page.hover(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });

    it('should display a tooltip on mouseover', async function() {
        await page.waitFor(SEL_TOOLTIP);
        expect(await page.$(SEL_TOOLTIP)).to.exist;
    });


    describe('The tooltip', function() {

        it('should have a title', async function() {
            await page.waitFor(SEL_TOOLTIP);
            expect(await page.$(SEL_TOOLTIP)).to.exist;
        });

        it('should have some further text', async function() {
            await page.waitFor(SEL_TOOLTIP);
            expect(await page.$(SEL_TOOLTIP).innerText).to.not.be.null;
        });
    });


    describe('Other text', async function() {
        let SEL_UNFLAGGED;

        before(async function() {

            SEL_UNFLAGGED = await page.evaluate(() => {
                const string = 'Some',
                    selector = '#feedback #container',
                    containers = document.querySelectorAll(selector);

                //finds container that contains string that should not be flagged
                for (let container of containers) {
                    if (container.innerText.includes(string))
                        return container;
                }
            });
        });

        it('should not have the style class "notice"', async function() {
            const element = await page.$(SEL_UNFLAGGED + SEL_NOTICE);
            expect(element).to.be.null;
        });

        it('should not be highlighted or display a tooltip on mouseover', async function() {
            await page.hover(SEL_NOTICE);

            const element = await page.$(SEL_UNFLAGGED + SEL_TOOLTIP);
            expect(element).to.be.null;
        });
    });
});