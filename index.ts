
import * as request from 'request';
import * as cheerio from 'cheerio';

const r = request.defaults({ jar: true })

r('https://arcamea.com/sv/shop/?add-to-cart=634', () => {
    console.log('30mm Done');

    r('https://arcamea.com/sv/shop/?add-to-cart=731', () => {
        console.log('35mm Done');

        r('https://arcamea.com/sv/shop/?add-to-cart=732', () => {
            console.log('40mm Done');

            r('https://arcamea.com/sv/shop/?add-to-cart=785', () => {
                console.log('Prov Done');

                r('https://arcamea.com/varukorg', (error, response, body) => {
                    const doc = cheerio.load(body);
                    let meh = [];

                    console.log('------------------------------');

                    const items = doc('.product-quantity input').map((i, item) => {
                        console.log(item.attribs['aria-labelledby'], item.attribs['max']);
                        meh.push(item.attribs['max']);
                    });

                    console.log(meh.join(', '));
                });
            });
        });
    });
});
