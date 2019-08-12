// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const cv = require('./src/data/cv.json')

module.exports = function (api) {

  api.loadSource(store => {
    const skillContentType = store.addContentType({
      typeName: 'Skills'
    })

    const experienceContentType = store.addContentType({
      typeName: 'Experiences'
    })

    const educationContentType = store.addContentType({
      typeName: 'Educations'
    })

    for (const skill of cv.skills) {
      skillContentType.addNode({
        active: skill.active,
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

    for (const exp of cv.experiences) {
      experienceContentType.addNode({
        year: exp.year,
        startDate: exp.startDate,
        endDate: exp.endDate,
        companyName: exp.companyName,
        companyLogo: exp.companyLogo,
        website: exp.website,
        title: exp.title,
        roles: exp.roles,
        highlights: exp.highlights,
        summary: exp.summary,
        full: exp.full
      })
    }

    for (const educ of cv.educations) {
      educationContentType.addNode({
        institution: educ.institution,
        area: educ.area,
        studyType: educ.studyType,
        startDate: educ.startDate,
        endDate: educ.endDate
      })
    }
  })
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}