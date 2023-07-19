const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const {
  Progress, User, Card, Category,
} = require('../../db/models');
const Account = require('../views/Account');

router.get('/', (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(Account, { login }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { login } = req.session;
    const user = await User.findOne({ where: { name: login } });
    const results = await Progress.findAll({
      where: {
        userId: user.id,
      },
      include: [
        {
          model: Card,
          include: [Category],
        },
      ],
      raw: true,
    });
    // console.log(results, '==== results');

    // const isLearned = results.filter((el) => el.isLearned === true);
    // const categoryOne = results.filter((el) => el['Card.categoryId'] === 1);
    // const categoryOne = results.filter((el) => el['Card.categoryId'] === 2);
    // const isLearnedOne = categoryOne.filter((el) => el.isLearned === true);
    //   console.log(isLearned);
    // const progress = ((isLearnedOne.length / 3) * 100).toFixed(2); // 66.67%
    // const result = [];
    //  result.push(progress);
console.log(results);
    const categoryIds = [...new Set(results.map((result) => result['Card.Category.id']))];
    const categoryName = [...new Set(results.map((result) => result['Card.Category.name']))];
    // console.log(categoryName);

    const categoryData = categoryIds.map((categoryId) => {
      const categoryResults = results.filter((result) => result['Card.Category.id'] === categoryId);
  
      const total = categoryResults.length;
      const islearned = categoryResults.filter((result) => result.isLearned === true).length;
      const progressPercent = ((islearned / total) * 100).toFixed(2);

      const categoryIndex = categoryIds.indexOf(categoryId);
      const categoryNameValue = categoryName[categoryIndex];

      return {
        categoryId,
        categoryName: categoryNameValue,
        total,
        islearned,
        progressPercent,
      };
    });

    res.json({ result: categoryData });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// нужно делить длину правильных ответов на общую длину массива под этой категорией.

// reduce
/*
results
{
    1:'59',
    2:'66',
    3: '77,
}
*/
