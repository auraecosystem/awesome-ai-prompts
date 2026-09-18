grammar AuraPrompt;

document
    : metadata body EOF;

metadata
    : FRONTMATTER yaml FRONTMATTER;

body
    : heading paragraph* block*;

heading
    : HASH TEXT;

paragraph
    : TEXT+;

block
    : code
    | quote
    | list;

list
    : DASH TEXT+;

code
    : TRIPLE_BACKTICK TEXT* TRIPLE_BACKTICK;
