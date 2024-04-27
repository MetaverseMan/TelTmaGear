#!/bin/bash

# 用非root账户登陆传输
# 定义源文件路径和目标服务器信息
private_key="/Users/hanpeng/Documents/Telbrella/aws/telbrella_secret.pem"
source_file="/Users/hanpeng/Documents/Telbrella/TelTmaGear/dist.zip"
config_file="./../etc/antservice-api.yaml"

remote_ip="18.142.250.237"
remote_user="ubuntu"
# 只能先上传到用户目录 目标目录没权限
remote_destination_path="/home/ubuntu/"
target_dir="/opt/telbrella/release/"

#destination_server="ubuntu@3.112.220.168:/home/ubuntu/"
#scp -i "$private_key" "$source_file" "$destination_server"

# 使用 SCP 命令传输文件，指定私钥。
# 过程中如果提示输入password 是本机客户端读取本地文件所需 而非服务器端需求。
sudo scp -i "$private_key" "$source_file" "$remote_user@$remote_ip:$remote_destination_path"
#sudo scp -i "$private_key" "$config_file" "$remote_user@$remote_ip:$remote_destination_path"



# 检查 SCP 命令的退出状态码，以确定传输是否成功
if [ $? -eq 0 ]; then
echo "文件上传成功 ｜ File transferred successfully"
#          # 将文件拷贝到指定文件夹
#          # 获取刚刚上传的文件名
#        filename=$(basename "$local_source_file")
#        echo $filename
#        # 在远程服务器拷贝文件到其他文件夹
#        ssh -i "$private_key" "$remote_user@$remote_ip" "cp $remote_destination_path$filename $target_dir"
#        if [ $? -eq 0 ]; then
#            echo "文件成功从远程服务器拷贝到其他文件夹"
#        else
#            echo "文件从远程服务器拷贝失败"
#        fi
else
    echo "文件上传失败 ｜ File transfer failed"
fi
# 在服务器 对应路径下 使用 ll 或者 stat 命令来查看文件的大小或创建时间和更新时间来手动确认上传成功
# sudo cp -f dist.zip /opt/telbrella/frontend/release
# sudo cp -f /home/ubuntu/dist.zip /opt/telbrella/frontend/release/
