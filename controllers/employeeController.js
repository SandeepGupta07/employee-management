const employee = require('../models/employee_modal')
const project = require('../models/projects_modal')
module.exports = {
    'show_employee' : async(req,res)=>{
        var result = await employee.find()
        if (!result)
            console.log(result)
        console.log(result)
        res.render('employe/employee',{data: JSON.parse(JSON.stringify(result)),title:'Employee List',page_title_1:'Employee List',page_title_2:'Dashboard',layout:'dashboard_layout'});
    },
    'add_employee': async(req,res)=>{
        const result = await project.find()
            if(!result)
        console.log(result)
        res.render('employe/add_employee',{data: JSON.parse(JSON.stringify(result)),title:'Employee List',page_title_1:'Employee List',page_title_2:'Dashboard',layout:'dashboard_layout'});
    },
    'store_employee' :async (req,res)=>{
        const {name,email,phone,project,role,password,address} = req.body

       const data_save = await employee.create({ name,email,phone,project,role,password,address });

       if (data_save) {
        res.render('employe/employee',{title:'Project List',page_title_1:'Project List',page_title_2:'Dashboard',layout:'dashboard_layout'});
       }
       console.log(data_save);
    }
}