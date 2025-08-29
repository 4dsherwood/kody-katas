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
    
    it('on day 9 returns quality +2 and sellin -1 given Backstage Passes ', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 4);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 8);
        assert.equal(rose.items[0].quality, 6);

    });

    it('on day 4 returns quality +3 and sellin -1 given Backstage Passes ', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 9);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 3);
        assert.equal(rose.items[0].quality, 12);

    });

    it('on day 13 returns quality +1 and sellin -1 given Aged Brie', () => {
        const item = new Item('Aged Brie', 13, 17);

        const rose = new GildedRose([
            item
        ]);
        
        rose.updateQuality();

    
        assert.equal(rose.items[0].sellIn, 12);
        assert.equal(rose.items[0].quality, 18);

    });
});
