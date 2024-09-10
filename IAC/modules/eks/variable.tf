variable "tag" {
  description = "Tags to apply to resources"
  type        = string
  default     = "eks_cluster"
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for the EKS cluster"
  type        = list(string)
}

variable "capacity_type" {
  description = "The capacity type for the node group"
  type        = string
  default     = "ON_DEMAND"
}

variable "instance_types" {
  description = "List of instance types for the node group"
  type        = list(string)
  default     = ["t2.small"]
}

variable "scaling_config_desired_size" {
  description = "The desired number of worker nodes"
  type        = number
  default     = 2
}

variable "scaling_config_max_size" {
  description = "The maximum number of worker nodes"
  type        = number
  default     = 3
}

variable "scaling_config_min_size" {
  description = "The minimum number of worker nodes"
  type        = number
  default     = 2
}

variable "max_unavailable" {
  description = "The maximum number of nodes unavailable during a rolling update"
  type        = number
  default     = 1
}

