const Project = require('../models/projects_modal')
module.exports = {
    'show_project': async (req, res) => {
        var result = await Project.find()
        if (!result)
            console.log(result)
        console.log(result)
        res.render('project/projects', { data: JSON.parse(JSON.stringify(result)), title: 'Project List', page_title_1: 'Project List', page_title_2: 'Dashboard', layout: 'dashboard_layout' });
    },
    'add_project': (req, res) => {
        console.log('project list page')
        res.render('project/add_projects', { title: 'Project List', page_title_1: 'Project List', page_title_2: 'Dashboard', layout: 'dashboard_layout' });
    },
    'create_project': async (req, res) => {
        const { project_name } = req.body
        console.log(project_name);

        const data_save = await Project.create({ name: project_name });

        if (data_save) {
            res.render('project/projects', { title: 'Project List', page_title_1: 'Project List', page_title_2: 'Dashboard', layout: 'dashboard_layout' });
        }
        console.log(data_save);
    }
}