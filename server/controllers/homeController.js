


home = async (req, res) => {
  const locals = {
    title: "Default Page",
    description: "Welcome to the default page",
  };

  res.render("default", {
    layout: 'layouts/defaultLay', 
    locals
  });
};

exports.home = home;