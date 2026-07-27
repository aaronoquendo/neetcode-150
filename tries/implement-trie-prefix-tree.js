class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;

        for (const character of word) {
            if (!current.children.has(character)) {
                current.children.set(character, new TrieNode());
            }

            current = current.children.get(character);
        }

        current.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        let found = true;

        for (const character of word) {
            if (!current.children.has(character)) {
                found = false;
                break;
            }

            current = current.children.get(character);
        }

        return found && current.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        let found = true;

        for (const character of prefix) {
            if (!current.children.has(character)) {
                found = false;
                break;
            }

            current = current.children.get(character);
        }

        return found;
    }
}
