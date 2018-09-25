exports.register=function(req,res)
{
   res.render('register');
};

exports.login=function(req,res)
{
    res.render('login');
};
exports.home=function(req,res)
{
    res.render('home');
};
exports.careers=function(req,res)
{
   res.render('careers');
};

exports.completedProjects=function(req,res)
{
	res.render('completedpro');
};