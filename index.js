function uploadVideo(){
    console.log("Uploading Video...");
    return new promise((resolve)=>{
        setTimeout(()=>{
            console.log("Video uploaded");
            resolve("Upload Succesful");
        },4000);
    });
}


function publishVideo(){
    console.log("Publishing Video...");
    return new promise((resolve)=>{
        setTimeout(()=>{
            console.log("Video Published");
            resolve("Publish Successful");
        },4000);
    });
}


function notifyUser(){
    console.log("Video Notification sent");
}


async function handleVideoUploadAndPublish(){
    try{
        console.log("Starting Video Upload and Publish...");
        const UploadResult = await uploadVideo();
        console.log("Upload Result:",UploadResult);
        const publishResult = await publishVideo();
        console.log("publish Result:",publishResult);
        
        notifyUser();
        console.log("All operations Completed Successfully.");
    } catch(error){
        console.error("An error occured:",error);

    }
}

handleVideoUploadAndPublish();