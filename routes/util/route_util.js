exports.pathVal = function(req){
    //get the last element of the url (or value)
    fullPath = req.path;
    return fullPath.substr(fullPath.lastIndexOf('/') + 1);
}
