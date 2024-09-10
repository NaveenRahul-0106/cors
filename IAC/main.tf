provider "aws" {
  region = "us-east-1"
}

module "vpc" {
  source = "./modules/vpc"

  vpc_cidr_block        = "10.0.0.0/16"
  public_subnet_count   = 2
  private_subnet_count  = 2
  public_subnet_cidrs   = ["10.0.0.0/24", "10.0.1.0/24"]
  private_subnet_cidrs  = ["10.0.2.0/24", "10.0.3.0/24"]
  tag                  = "eks_cluster"
}

module "eks" {
  source         = "./modules/eks"
  cluster_name   = "demo"
  subnet_ids     = concat(module.vpc.private_subnet_ids, module.vpc.public_subnet_ids)
  capacity_type           = "ON_DEMAND"
  instance_types         = ["t2.small", "t2.medium"]
  scaling_config_desired_size = 2
  scaling_config_max_size     = 3
  scaling_config_min_size     = 2
  max_unavailable        = 1
}
 

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnet_ids" {
  value = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  value = module.vpc.private_subnet_ids
}

output "nat_gateway_id" {
  value = module.vpc.nat_gateway_id
}
