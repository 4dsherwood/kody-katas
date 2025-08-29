import {GildedRose, Item} from '../src';

describe('Gilded Rose', () => {

    it('should return empty array when given no items', () => {
        const rose = new GildedRose();
        
        rose.updateQuality();

        assert.equal(rose.items.length, 0);
    });

    it('return same sell in and quality when given sulfuras', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 0);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

        assert.equal(rose.items.length, 1);
        assert.equal(rose.items[0].sellIn, 0);
        assert.equal(rose.items[0].quality, 0);

    });
    it('returns quality 5 and sell in 2 when given unrecognized item', () => {
        const item = new Item('apple', 3, 6);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 2);
        assert.equal(rose.items[0].quality, 5);

    });
    // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
    it('on day 11 returns quality +1 and sellin -1 given Backstage Passes ', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 4);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 10);
        assert.equal(rose.items[0].quality, 5);

    });
    
    it('on day 10 returns quality +2 and sellin -1 given Backstage Passes ', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 4);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 9);
        assert.equal(rose.items[0].quality, 6);

    });

    it('on day 5 returns quality +3 and sellin -1 given Backstage Passes ', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 9);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 4);
        assert.equal(rose.items[0].quality, 12);

    });

    
    it('on day 0 returns quality 0 and sellin -1 given Backstage Passes', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, -1);
        assert.equal(rose.items[0].quality, 0);

    });
    
    it('on day 11 returns quality +1 and sellin -1 given Aged Brie', () => {
        const item = new Item('Aged Brie', 11, 17);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 10);
        assert.equal(rose.items[0].quality, 18);

    });
});
