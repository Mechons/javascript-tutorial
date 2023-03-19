//An Anagram is a word or phrase formed by rearranging the letters of a
//different word or phrase, typically using all the original letters exactly once.

//Input: s = "anagram", t = "nagaram" ===> Output: true
// Input: s = "rat", t = "car"  ===> Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

// rat and cat

// if key values are same true
// {
// r :1,
// a:1,
// t:1
// }

// {
//     c:1,
//     a :1,
//     t :1
// }
console.log(isAnagram("rat", "car"));
