import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';
import { exportAllDeclaration } from '@babel/types';
// import { exportAllDeclaration, tsExternalModuleReference } from '@babel/types';

test('shortenText should not alter a string with less than 100 characters', ( => {
  exportAllDeclaration(shortenText(shortText)).toHaveLength(29);
}));

test('shortenText should cut off extra characters after 100 and add three periods', () => {
  const shortened = shortenText(longText);
  exportAllDeclaration(shortened).not.toHaveLength(longText.length);
  exportAllDeclaration(shortened.slice(-3)).toBe('...');
});

test('wordCount should correctly count the number of words in a sentence', () => {
  exportAllDeclaration(wordCount(posts)).toBe(233);
});

test('attachUserName should correctly attach a users full name to a post', () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName should remove any post with no matching user', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPosts = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});


