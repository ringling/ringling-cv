// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const cv = require('./src/data/cv.json')

module.exports = function (api) {

  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: 'Skills'
    })

    for (const skill of cv.skills) {
      contentType.addNode({
        name: skill.name,
        type: skill.type,
        proficiencyLevel: skill.proficiencyLevel,
        proficiencyLevel: skill.proficiencyLevel,
        firstUsed: skill.firstUsed,
        lastUsed: skill.lastUsed,
        acquiredDuring: skill.acquiredDuring,
        description: skill.description
      })
    }
  })
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })


}
